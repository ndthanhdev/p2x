# P2X

## Installing

### Console App
This part of project is used for collect data, send data to `Web Server` and execute command is sent from `Web Server`

#### Connect hardware
- Connect `Lock Control Board` which is used for `lock` to the `right` output of `Mainboard`
- (Optional) connect `Lock Control Board` which is used for `Infrared Sensor` to the `left` output of `Mainboard` 
> **Note!** If you don't use sensor, leave left output of Mainboard empty and set `IsSensor` value in `config.json` to `false`

#### Prerequisites
- Microsoft .NET Framework 4.6.1 (or higher)

#### Getting started
- Open `Console App`'s folder
- Open `config.json` file. It looks like below.
```
{
  "PortName": "COM1",
  "NLocks": 8,
  "IsSensor": true,
  "ServerUrl": "http://localhost:3000",
  "Secret": "super secret",
  "ShowWindow": true
}
```
- Edit config base on local value
> **Note!** If you setup for production environment, set `ShowWindow` value in `config.json` to `false` to hidden `Console App`
- Run `App.exe`

#### Setup for production environment
- Set `ShowWindow` to false
- Create a shortcut to `App.exe`
- Place shortcut in startup folder of `Window` and app will auto startup with window
- You can also use multiple `Mainboard` with a `PC`.

#### Config file's fields
| Parameter | Description | Type | Example
| --- | --- | --- | --- |
| PortName | Name of the port HldMainBoard is connected | string | `COM1`, `COM2` |
| NLocks | Number of locks connected on right side of Mainboard | number (from 0 to 152) | `8`, `9`, `10` | 
| IsSensor | Determine if the sensor is attached | boolean | false
| ServerUrl | Server's address used for send and receive data | string | `http://localhost:3000`
| Secret | Used for authentication | string | `super secret`
| ShowWindow | Enable console window | boolean | `false`