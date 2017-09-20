import {Nes} from './src/Nes.js';
import {Rom} from './src/Rom.js';
import {Audio} from './src/Audio.js';
import {Display} from './src/Display.js';

function NesJs() {}

NesJs.Nes = Nes;
NesJs.Rom = Rom;
NesJs.Audio = Audio;
NesJs.Display = Display;

if(window !== undefined)
  window.NesJs = NesJs;
