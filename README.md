# Merged input plugin for Phaser 3
A Phaser 3 plugin to map input from keyboard & gamepad to player actions.

The merged input plugin listens to input from keyboard & gamepad, updating ‘player’ objects that you may interrogate instead of writing separate input handlers in your game.
Each player object contains direction and button actions. These are updated by the corresponding gamepad input, as well as any keys that you assign to the action.

## Benefits 
. Single place to handle all your input.  
. Keyboard and Gamepad input is amalgamated.  
. Handle input for multiple player objects to easily create multiplayer games.  
. Assign and reassign keys to actions for each player, allowing for ‘redefine keys’ function.  
. Assign multiple keys to a single action.  
. Interrogate current state of all buttons.  
. Global events emitted on button down/up.  
. Check for gamepad button presses (i.e. ‘justDown()’ functionality for gamepads)  
. Check the last device type used for interaction.  

## Setup
Set up a player object for each player in your game with `addPlayer()`.
Then assign keys to each action with the `defineKey()` function, e.g.
```
var player1 = mergedInput.addPlayer();
mergedInput.defineKey(0, 'UP', 'W')
    .defineKey(0, 'DOWN', 'S')
    .defineKey(0, 'LEFT', 'A')
    .defineKey(0, 'RIGHT', 'D')
    .defineKey(0, 'B0', 'U')
    .defineKey(0, 'B1', 'I')
    .defineKey(0, 'B2', 'O')
    .defineKey(0, 'B3', 'P')

var player2 = mergedInput.addPlayer();
mergedInput.defineKey(0, 'UP', 'UP')
    .defineKey(0, 'DOWN', 'DOWN')
    .defineKey(0, 'LEFT', 'LEFT')
    .defineKey(0, 'RIGHT', 'RIGHT')
    .defineKey(0, 'B0', 'NUMPAD_0')
    .defineKey(0, 'B1', 'NUMPAD_1')
    .defineKey(0, 'B2', 'NUMPAD_2')
    .defineKey(0, 'B3', 'NUMPAD_3')
```

Then, interrogate your player objects to check for the state of the _action_, rather than the key, e.g.
```
    if(player1.direction.DOWN) {
        // Move your player down
    }

    if(player2.buttons.B0 > 0) {
        // Player two is pressing the first button
    }
```

## Demo / Dev
A demo scene is included in the repository.  
![](src/demo/merged-input-demo.gif)  
Install with `npm install`, then use `npm run dev` to spin up a development server and run the demo scene.


## Build plugin
Build the plugin including minified version. Targets the dist folder.
`npm run build`

## Credits
Written by [Gary Stanton](https://garystanton.co.uk)  
Built from the [Plugin Starter Kit](https://github.com/nkholski/phaser-plugin-starter) by Niklas Berg  
Demo sprites by [Nicolae Berbece](https://opengameart.org/content/free-keyboard-and-controllers-prompts-pack)  

---

## Functions

<dl>
<dt><a href="#addPlayer">addPlayer()</a></dt>
<dd><p>Add a new player object to the players array</p>
</dd>
<dt><a href="#getPlayer">getPlayer(thisPlayer)</a></dt>
<dd><p>Get player object</p>
</dd>
<dt><a href="#setupControls">setupControls()</a></dt>
<dd><p>Returns a struct to hold input control information
Set up a struct for each player in the game
Direction and Buttons contain the input from the devices
The keys struct contains arrays of keyboard characters that will trigger the action</p>
</dd>
<dt><a href="#defineKey">defineKey(player, action, value, append)</a></dt>
<dd><p>Define a key for a player/action combination</p>
</dd>
<dt><a href="#checkKeyboardInput">checkKeyboardInput()</a></dt>
<dd><p>Iterate through players and check for interaction with defined keys</p>
</dd>
<dt><a href="#gamepadButtonDown">gamepadButtonDown(index, value, button)</a></dt>
<dd><p>When a gamepad button is pressed down, this function will emit a mergedInput event in the global registry.
The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value</p>
</dd>
<dt><a href="#gamepadButtonUp">gamepadButtonUp(index, value, button)</a></dt>
<dd><p>When a gamepad button is released, this function will emit a mergedInput event in the global registry.
The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value</p>
</dd>
<dt><a href="#checkGamepadInput">checkGamepadInput()</a></dt>
<dd><p>Iterate through gamepads and handle interactions</p>
</dd>
</dl>

<a name="addPlayer"></a>

## addPlayer()
Add a new player object to the players array


<a name="getPlayer"></a>

## getPlayer(index)
Get player object



| Param | Type |
| --- | --- |
| thisPlayer | <code>number</code> | 

<a name="setupControls"></a>

## setupControls()
Returns a struct to hold input control information
Set up a struct for each player in the game
Direction and Buttons contain the input from the devices
The keys struct contains arrays of keyboard characters that will trigger the action


<a name="defineKey"></a>

## defineKey(player, action, value, append)
Define a key for a player/action combination



| Param | Type | Default | Description |
| --- | --- | --- | --- |
| player | <code>number</code> | <code>0</code> | The player on which we're defining a key |
| action | <code>string</code> |  | The action to define |
| value | <code>string</code> |  | The key to use |
| append | <code>boolean</code> | <code>false</code> | When true, this key definition will be appended to the existing key(s) for this action |

<a name="checkKeyboardInput"></a>

## checkKeyboardInput()
Iterate through players and check for interaction with defined keys


<a name="gamepadButtonDown"></a>

## gamepadButtonDown(index, value, button)
When a gamepad button is pressed down, this function will emit a mergedInput event in the global registry.
The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value



| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Button index |
| value | <code>number</code> | Button value |
| button | <code>Phaser.Input.Gamepad.Button</code> | Phaser Button object |

<a name="gamepadButtonUp"></a>

## gamepadButtonUp(index, value, button)
When a gamepad button is released, this function will emit a mergedInput event in the global registry.
The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value



| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Button index |
| value | <code>number</code> | Button value |
| button | <code>Phaser.Input.Gamepad.Button</code> | Phaser Button object |

<a name="checkGamepadInput"></a>

## checkGamepadInput()
Iterate through gamepads and handle interactions
