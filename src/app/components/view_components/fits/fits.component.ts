import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.scss']
})
export class FitsComponent implements OnInit {

	public heroTitle = '<div class="top-line">NWFLT</div>Blops Fits';

	fits: any[] = [
		{ 
			category: 'Tackle',
			ships: [
				{
					name: 'Blops Tackle Astero',
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
					name: 'Falcon',
					fit: `[Falcon, Jam Falcon] 
Damage Control II
'Hypnos' Signal Distortion Amplifier I
'Hypnos' Signal Distortion Amplifier I

Multispectral ECM II
Gravimetric ECM II
50MN Quad LiF Restrained Microwarpdrive
Radar ECM II
EM Ward Amplifier II
Republic Fleet Large Shield Extender
Ladar ECM II

Covert Cynosural Field Generator I
250mm Railgun II
250mm Railgun II
Covert Ops Cloaking Device II

Medium Targeting Systems Stabilizer II
Medium Particle Dispersion Augmentor II



Hornet EC-300 x2

Ladar ECM II x1
Javelin M x785
Spike M x964
Nanite Repair Paste x375`
				}
			]
		},
		{ 
			category: 'Damage',
			ships: [
				{
					name: 'Hound',
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
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
