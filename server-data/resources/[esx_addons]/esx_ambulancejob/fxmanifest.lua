fx_version("adamant")

game("gta5")

description("ESX Ambulance Job")

version("1.0.0")

shared_script("@es_extended/imports.lua")

server_scripts({
	"@oxmysql/lib/MySQL.lua",
	"@es_extended/locale.lua",
	"locales/*.lua",
	"config.lua",
	"server/*.lua",
})

client_scripts({
	"@es_extended/locale.lua",
	"locales/*.lua",
	"config.lua",
	"client/*.lua",
})

dependencies({
	"es_extended",
})
