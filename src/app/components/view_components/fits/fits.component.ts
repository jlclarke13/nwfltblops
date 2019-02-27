import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.scss'],
  animations: [
  	trigger('copyAnim', [
  		state('uncopied', style({
  			opacity: 0
  		})),
  		state('copied', style({
  			opacity: 1
  		})),
  		transition('uncopied => copied', [
  			animate('0ms')
  		]),
  		transition('copied => uncopied', [
  			animate('2600ms')
  		])
  	])
  ]
})
export class FitsComponent implements OnInit {

	public heroTitle = '<div class="top-line">NWFLT</div><div class="bottom-line">Blops Fits</div>';

	state: string = 'uncopied';

	fits: any[] = [
		{ 
			category: 'Damage',
			ships: [
				{
					name: 'Hound',
					imgPath: 'hound.png',
					state: 'uncopied',
					fit: `[Hound, Hound]
Nanofiber Internal Structure II
Ballistic Control System II
Ballistic Control System II

Phased Scoped Target Painter
Republic Fleet Medium Shield Extender
5MN Y-T8 Compact Microwarpdrive

Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Covert Ops Cloaking Device II

Small Warhead Rigor Catalyst II
Small Ancillary Current Router II




Caldari Navy Nova Torpedo x607
Nanite Repair Paste x120`
				},
				{
					name: 'Polarized Hound',
					imgPath: 'hound2.png',
					state: 'uncopied',
					fit: `[Hound, Polarized Hound]
Ballistic Control System II
Ballistic Control System II
Nanofiber Internal Structure II

Republic Fleet Medium Shield Extender
Phased Scoped Target Painter
5MN Y-T8 Compact Microwarpdrive

Polarized Torpedo Launcher
Polarized Torpedo Launcher
Polarized Torpedo Launcher
Covert Ops Cloaking Device II

Small Bay Loading Accelerator II
Small Ancillary Current Router I




Nova Rage Torpedo x680
Caldari Navy Nova Torpedo x500
Nanite Repair Paste x350`
				},
				{
					name: 'Purifier',
					imgPath: 'purifier.png',
					state: 'uncopied',
					fit: `[Purifier, Purifier]
Nanofiber Internal Structure II
Ballistic Control System II
Ballistic Control System II

Phased Scoped Target Painter
Medium F-S9 Regolith Compact Shield Extender
5MN Y-T8 Compact Microwarpdrive

[Empty High slot]
Covert Ops Cloaking Device II
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher

Small Bay Loading Accelerator II
Small Low Friction Nozzle Joints I




Caldari Navy Mjolnir Torpedo x408
Nanite Repair Paste x30`
				},
				{
					name: 'Polarized Purifier',
					imgPath: 'purifier2.png',
					state: 'uncopied',
					fit: `[Purifier, PolarizedPurifier]
Nanofiber Internal Structure II
Ballistic Control System II
Ballistic Control System II

Medium F-S9 Regolith Compact Shield Extender
Phased Scoped Target Painter
5MN Y-T8 Compact Microwarpdrive

Polarized Torpedo Launcher
Polarized Torpedo Launcher
Polarized Torpedo Launcher
Covert Ops Cloaking Device II

Small Bay Loading Accelerator II
Small Low Friction Nozzle Joints I




Mjolnir Rage Torpedo x500
Caldari Navy Mjolnir Torpedo x500
Nanite Repair Paste x250`
				},
				{
					name: 'Manticore',
					imgPath: 'manticore.png',
					state: 'uncopied',
					fit: `[Manticore, Manticore]
Nanofiber Internal Structure II
Ballistic Control System II

Medium F-S9 Regolith Compact Shield Extender
Warp Disruptor II
Phased Muon Scoped Sensor Dampener
5MN Y-T8 Compact Microwarpdrive

Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Covert Ops Cloaking Device II

Small Bay Loading Accelerator I
Small Ancillary Current Router II




Caldari Navy Scourge Torpedo x300
Nanite Repair Paste x30
Scan Resolution Dampening Script x1
Targeting Range Dampening Script x1`
				},
				{
					name: 'Nemesis',
					imgPath: 'nemesis.png',
					state: 'uncopied',
					fit: `[Nemesis, Nemesis]
Micro Auxiliary Power Core I
Ballistic Control System II

Phased Scoped Target Painter
Medium F-S9 Regolith Compact Shield Extender
Warp Disruptor II
5MN Y-T8 Compact Microwarpdrive

[Empty High slot]
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Prototype 'Arbalest' Torpedo Launcher
Covert Ops Cloaking Device II

Small Bay Loading Accelerator II
Small Low Friction Nozzle Joints I




Caldari Navy Inferno Torpedo x408
Nanite Repair Paste x30`
				}
			]
		},
		{ 
			category: 'Tackle',
			ships: [
				{
					name: 'Blops Tackle Astero',
					imgPath: 'astero.png',
					state: 'uncopied',
					fit: `[Astero, blops tackle astero]
Small Ancillary Armor Repairer
200mm Steel Plates II
Reactive Armor Hardener
Damage Control II

Warp Scrambler II
Warp Disruptor II
Fleeting Compact Stasis Webifier
5MN Quad LiF Restrained Microwarpdrive

[Empty High slot]
Covert Ops Cloaking Device II

Small Trimark Armor Pump II
Small Trimark Armor Pump II
Small Anti-Explosive Pump II



Imperial Navy Acolyte x5
Caldari Navy Hornet x5
Republic Fleet Warrior x5

Nanite Repair Paste x164`
				}
			]
		},
		{ 
			category: 'Electronics',
			ships: [
				{
					name: 'Pilgrim',
					imgPath: 'pilgrim.png',
					state: 'uncopied',
					fit: `[Pilgrim, NWFLT Pilgrim]

Damage Control II
Imperial Navy Energized Adaptive Nano Membrane
Federation Navy 1600mm Steel Plates
Imperial Navy Energized Adaptive Nano Membrane
Power Diagnostic System II

50MN Quad LiF Restrained Microwarpdrive
Tracking Disruptor II, Tracking Speed Disruption Script
Tracking Disruptor II, Tracking Speed Disruption Script
Tracking Disruptor II, Tracking Speed Disruption Script
Sensor Booster II, Scan Resolution Script

Covert Ops Cloaking Device II
Corpum C-Type Medium Energy Neutralizer
Corpum C-Type Medium Energy Nosferatu
Corpum C-Type Medium Energy Neutralizer

Medium Tracking Diagnostic Subroutines II
Medium Polycarbon Engine Housing I


Warrior II x5
Hornet EC-300 x5
Valkyrie II x5
Valkyrie II x3
Warrior II x4


Optimal Range Disruption Script x3`
				},
				{
					name: 'Falcon',
					imgPath: 'falcon.png',
					state: 'uncopied',
					fit: `[Falcon, NWFLT Falcon]

Damage Control II
Signal Distortion Amplifier II
Signal Distortion Amplifier II

Ladar ECM II
Ladar ECM II
Ladar ECM II
50MN Quad LiF Restrained Microwarpdrive
Republic Fleet Large Shield Extender
Republic Fleet Large Shield Extender
Magnetometric ECM II

Medium Solace Scoped Remote Armor Repairer
Medium Solace Scoped Remote Armor Repairer
Covert Cynosural Field Generator I
Covert Ops Cloaking Device II

Medium Particle Dispersion Projector II
Medium Particle Dispersion Projector II


Warrior II x2


Liquid Ozone x300
Nanite Repair Paste x200`
				}
			]
		},
		{ 
			category: 'Hunters',
			ships: [
				{
					name: 'Blops Hunting Prospect',
					imgPath: 'prospect.png',
					state: 'uncopied',
					fit: `[Prospect, Blops Prospect]
Adaptive Nano Plating II
Adaptive Nano Plating II
400mm Rolled Tungsten Compact Plates
Small Ancillary Armor Repairer

Warp Scrambler II
5MN Y-T8 Compact Microwarpdrive
Initiated Compact Warp Disruptor

Covert Cynosural Field Generator I
Expanded Probe Launcher I
Covert Ops Cloaking Device II

Small Ancillary Current Router II
Small Processor Overclocking Unit I




Nanite Repair Paste x103
Sisters Combat Scanner Probe x8`
				}
			]
		}
	];

  constructor() { }

  ngOnInit() {
  }

  copyFit(cidx: number, sidx: number, val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.runCopiedAnim(cidx, sidx);
  }

  runCopiedAnim(cidx: number, sidx: number) {
  	this.fits[cidx].ships[sidx].state = 'copied';
  	setTimeout(() => {
  		this.fits[cidx].ships[sidx].state = 'uncopied';
  	}, 1600);
  }

}
