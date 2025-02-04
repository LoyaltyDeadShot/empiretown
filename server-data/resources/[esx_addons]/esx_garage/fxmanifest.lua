fx_version("cerulean")
game("gta5")

author("bitpredator")
description("BPT Garage System compatible with esx")
version("1.0.0")
lua54("yes")

shared_script("@es_extended/imports.lua")

server_scripts({
    "@es_extended/locale.lua",
    "locales/*.lua",
    "@oxmysql/lib/MySQL.lua",
    "config.lua",
    "server/main.lua",
})

client_scripts({
    "@es_extended/locale.lua",
    "locales/*.lua",
    "config.lua",
    "client/main.lua",
})

ui_page("nui/ui.html")

files({
    "nui/ui.html",
    "nui/js/*.js",
    "nui/css/*.css",
    "nui/roboto.ttf",
})
