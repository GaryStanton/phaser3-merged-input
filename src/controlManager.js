import pad_generic from './configs/pad_generic'
import pad_unlicensedSNES from './configs/pad_unlicensedSNES'
import pad_xbox360 from './configs/pad_xbox360'

export default class controlManager {
    constructor (){
    }

    mapGamepad(id) {
        id = id.toLowerCase();
        let padConfig = pad_generic;

        if (id.includes('081f') && id.includes('e401')) {
            padConfig = pad_unlicensedSNES;
        }
        else if (id.includes('xbox') && id.includes('360')) {
            padConfig = pad_xbox360;
        }
        else {
            
        }

        return padConfig;
    }

    getBaseControls() {
        return {
            'direction': {
                'UP': 0,
                'DOWN': 0,
                'LEFT': 0,
                'RIGHT': 0,
                'BEARING': '',
                'BEARING_LAST': '',
                'DEGREES': 0,
                'DEGREES_LAST': 0,
                'TIMESTAMP': 0
            },
            'direction_secondary': {
                'UP': 0,
                'DOWN': 0,
                'LEFT': 0,
                'RIGHT': 0,
                'BEARING': '',
                'DEGREES': 0,
                'BEARING_LAST': '',
                'DEGREES_LAST': 0,
                'TIMESTAMP': 0
            },
            'buttons': {},
            'gamepadMapping': {
                RC_S: 0,
                RC_E: 1,
                RC_W: 2,
                RC_N: 3,
                START: 9,
                SELECT: 8,
                LB: 4,
                RB: 5,
                LT: 6,
                RT: 7,
                LS: 10,
                RS: 11,
                LC_N: 12,
                LC_S: 13,
                LC_W: 14,
                LC_E: 15,
                MENU: 16
            },
            'pointer': {
                'M1': 0,
                'M2': 0,
                'M3': 0,
                'M4': 0,
                'M5': 0,
                'BEARING': '',
                'BEARING_DEGREES': 0,
                'ANGLE': 0,
                'TIMESTAMP': 0
            },
            'position': {},
            'gamepad': {},
            'keys': {
                'UP': [],
                'DOWN': [],
                'LEFT': [],
                'RIGHT': [],
            },
            'internal': {
                'fakedpadBuffer': '',
                'fakedpadPressed': '',
                'fakedpadReleased': '',
            },
            'interaction': {
                'buffer': '',
                'pressed': '',
                'released': '',
                'last': '',
                'lastPressed': '',
                'lastReleased': '',
                'device': '',
            },
            'interaction_mapped': {
                'pressed': '',
                'released': '',
                'last': '',
                'lastPressed': '',
                'lastReleased': '',
                'gamepadType': '',
            },
            'buttons_mapped': {
                RC_S: 0,
                RC_E: 0,
                RC_W: 0,
                RC_N: 0,
                START: 0,
                SELECT: 0,
                MENU: 0,
                LB: 0,
                RB: 0,
                LT: 0,
                RT: 0,
                LS: 0,
                RS: 0,
                LC_N: 0,
                LC_S: 0,
                LC_W: 0,
                LC_E: 0,
            }
        }
    }



    /**
     * Returns a struct to hold input control information
     * Set up a struct for each player in the game
     * Direction and Buttons contain the input from the devices
     * The keys struct contains arrays of keyboard characters that will trigger the action
     */
    setupControls(numberOfButtons) {
        numberOfButtons = numberOfButtons || 16;

        let controls = this.getBaseControls();

        // Add buttons
        for (let i = 0; i <= numberOfButtons; i++) {
            controls.buttons['B' + i] = 0;
            controls.keys['B' + i] = [];
        }

        return controls;
    }


}
