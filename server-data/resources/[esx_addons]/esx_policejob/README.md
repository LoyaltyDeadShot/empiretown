### Requirements
* Auto mode
  * [esx_billing](https://github.com/esx-framework/esx_billing)
  * [esx_vehicleshop](https://github.com/esx-framework/esx_vehicleshop)

* Player management (boss actions and armory with buyable weapons)
  * [esx_addoninventory](https://github.com/esx-framework/esx_addoninventory)
  * [esx_datastore](https://github.com/esx-framework/esx_datastore)
  * [esx_society](https://github.com/esx-framework/esx_society)

* ESX Identity Support
  * [esx_identity](https://github.com/esx-framework/esx_core/tree/main/%5Bcore%5D/esx_identity)

* ESX License Support
  * [esx_license](https://github.com/esx-framework/esx_license)

* ESX Status Support
  * [esx_status](https://github.com/esx-framework/esx_status)

## Download & Installation

### Using [fvm](https://github.com/qlaffont/fvm-installer)
```
fvm install --save --folder=esx esx-framework/esx_policejob
```

### Using Git
```
cd resources
git clone https://github.com/esx-framework/esx_policejob [esx]/esx_policejob
```

### Manually
- Download https://github.com/esx-framework/esx_policejob/archive/master.zip
- Put it in the `[esx]` directory


## Installation
- Import `esx_policejob.sql` in your database
- Add this to your server.cfg:

```
start esx_policejob
```

-  * If you want player management you have to set `Config.EnablePlayerManagement` to `true` in `config.lua`
   * If you want armory management you have to set `Config.EnableArmoryManagement` to `true` in `config.lua`
   * If you want license management you have to set `Config.EnableLicenses` to `true` in `config.lua`

# Legal
### License
esx_policejob - police script for ESX

Copyright (C) 2015-2023 Jérémie N'gadi

This program Is free software: you can redistribute it And/Or modify it under the terms Of the GNU General Public License As published by the Free Software Foundation, either version 3 Of the License, Or (at your option) any later version.

This program Is distributed In the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty Of MERCHANTABILITY Or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License For more details.

You should have received a copy Of the GNU General Public License along with this program. If Not, see http://www.gnu.org/licenses/.
