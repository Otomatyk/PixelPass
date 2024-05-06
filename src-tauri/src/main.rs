// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use sha2::{Sha256, Digest};
use hex;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn hash_password(buffer: &str) -> String {
    let hash = Sha256::new()
        .chain_update(buffer)
        .finalize();
    
    return (hex::encode(hash))[0..16].to_string();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![hash_password])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
