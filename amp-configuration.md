---
outline: deep
---

# AMP Configuration Reference

This page covers every setting exposed in the AMP dashboard for the AA2Reborn template. For getting the server up and running, see the [AMP Setup Guide](./amp-setup) first.

Settings are organized into tabs under the instance's **Configuration** page in AMP.

## AA2Reborn Auth

These settings authenticate your server with the AA2Reborn network. All three are required for your server to appear on the public list.

| Setting | Description | Default |
|---|---|---|
| **Server Secret** | Your secret key from tracker.aa2reborn.com. | *(required)* |
| **External IP** | Your server's public IP. Required if behind NAT. Find it at [ipinfo.io/ip](https://ipinfo.io/ip). | *(required)* |
| **Auth Port** | Must match your Game Port exactly. Tells the auth server which port you're on. | `1716` |

::: warning
If **Auth Port** and **Game Port** don't match, authentication will fail and your server won't show on the list.
:::

## Server Settings

| Setting | Description | Default |
|---|---|---|
| **Server Name** | Public name shown in the server browser. | `America's Army Server` |
| **Short Server Name** | Short name used by some third-party server browsers. | `AA Server` |
| **Max Players** | Maximum concurrent players. Some maps are designed for fewer than 32. | `26` |
| **Map Name** | Map file loaded on startup. Example: `Pipeline.aao` | `Pipeline.aao` |
| **Player Admin** | Optional admin entry in `Name,Password` format. To connect as admin, open the in-game console and type `start SERVERIP?PAPassword=YourPassword`. Additional admins can be added manually in `System/server.ini`. | *(empty)* |

## Message of the Day

| Setting | Description | Default |
|---|---|---|
| **MOTD Display Time** | How long in seconds the MOTD is shown to joining players. | `10` |
| **MOTD Line 1** | First line of the MOTD. | `Welcome to America's Army` |
| **MOTD Line 2** | Second line. | *(empty)* |
| **MOTD Line 3** | Third line. | *(empty)* |
| **MOTD Line 4** | Fourth line. | *(empty)* |

## Advanced

These rarely need changing. Useful for troubleshooting or running multiple instances on the same host.

| Setting | Description | Default |
|---|---|---|
| **Game Port** | Main UDP port the game listens on. | `1716` |
| **INI File** | Server config file. Leave as `server.ini` unless running multiple instances. | `server.ini` |
| **Log File** | Log file written by the server process. | `server.log` |
| **Extra Startup Arguments** | Extra arguments appended to the server command line. Leave blank unless troubleshooting. | *(empty)* |

## Ultimate Mod

Ultimate Mod is a server-side administration mod included with AA2Reborn and enabled by default. Its settings are split into several subcategories.

### Weapon Mode

Only **one** weapon mode should be enabled at a time (`1` = on, `0` = off). Set the active mode to `1` and all others to `0`.

| Setting | Description | Default |
|---|---|---|
| **Normal** | Players use their default assigned class weapons. Standard gameplay. | `1` |
| **Pick Weapon** | Players choose their own weapon at spawn. | `0` |
| **Random Weapons** | Each player spawns with a different random weapon. | `0` |
| **Random Weapons (Same)** | All players get the same randomly selected weapon each round. | `0` |
| **Random Snipers** | Each player spawns with a different random sniper class. | `0` |
| **Random Snipers (Same)** | All players get the same randomly selected sniper class. | `0` |
| **Random Guerrilla** | Each player spawns with a random guerrilla class weapon. | `0` |
| **Custom Class** | Uses a custom class list defined in `Ultimate.ini`. | `0` |
| **Custom Class (Same)** | All players spawn with the same weapon from the custom class list. | `0` |
| **Force Weapon Class** | Forces all players to a specific class. Only active when all weapon mode toggles are `0`. Example: `AGP_Characters.ClassRifleman` | `AGP_Characters.ClassRifleman` |

### Gameplay Settings

| Setting | Description | Default |
|---|---|---|
| **Respawn** | Players respawn after death instead of waiting for the next round. | `0` |
| **Disable Objectives** | Disables map objectives — teams focus on eliminating each other. | `1` |
| **Killing Spree Messages** | Announces killing streaks to all players. | `1` |
| **Headshot Messages** | Displays a message to all players on a headshot kill. | `1` |
| **Respawn on Team Kill** | Immediately respawns the victim of a team kill. | `0` |
| **Regenerate Health** | Players slowly regenerate health over time. | `0` |
| **Unlimited Ammo** | Unlimited reserve ammo — players never run out of magazines. | `0` |
| **Unlimited Clip Ammo** | Unlimited ammo within each magazine — players never need to reload. | `0` |
| **Unlimited Aux Ammo** | Unlimited auxiliary ammo (grenades, launcher rounds, etc.). | `0` |
| **Auto Reload** | Automatically reloads when a magazine runs empty. | `0` |
| **Delete M9** | Removes the M9 pistol from all players at spawn. | `0` |
| **Delete Grenades** | Removes grenades from all players at spawn. | `0` |
| **Delete Ammo Pickups** | Removes ammo pickup items from the map. | `0` |
| **Delete Doors** | Removes all doors from the map. | `0` |
| **Suppress Admin Messages** | Hides admin action messages from players when mutate commands are used. | `0` |

### Physics

| Setting | Description | Range | Default |
|---|---|---|---|
| **Jump Height** | How high players can jump. Higher = bigger jumps. | `0–2000` | `400` |
| **Gravity** | Server gravity. Lower = floatier movement, higher = faster fall. | `0–5000` | `1500` |

### Messages

| Setting | Description | Default |
|---|---|---|
| **Welcome Message** | Shown to each player when they join. Use `%Player%` to insert their name. | `Welcome %Player%, to the ultimate AA experience` |

### Honor

| Setting | Description | Default |
|---|---|---|
| **Use Honor System** | Enables the AA honor/server badge system. Disable to show no badge. | `1` |
| **Honor / Server Type** | Badge type shown in the server browser. See options below. | `Official` |

::: warning
Official server types do not allow player admins. If you've set a **Player Admin**, choose a non-Official honor type.
:::

**Available honor types:**

| Value | Label |
|---|---|
| 1 | Authorized |
| 2 | Leased |
| 3 | Official |
| 4 | Leased Official |
| 5 | Dev Authorized |
| 6 | Dev Leased |
| 7 | Dev Official |
| 8 | Dev Leased Official |
| 9 | Beta Authorized |
| 10 | Beta Leased |
| 11 | Beta Official |
| 12 | Beta Leased Official |
| 13 | NATO Authorized |
| 14 | Leased NATO |
| 15 | Official NATO |
| 16 | Leased Official NATO |
| 17 | Official |

---

Back to [AMP Setup Guide](./amp-setup).
