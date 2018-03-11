import { repeat, map } from 'ramda';

export default {
  admin: {
    isAdmin:false,
    activeTabs:['BatteryDetail','PowerTable'],
    cVoltTable:[
      {
        c:.2,
        volts:[4.2,4.02,3.94,3.86,3.80,3.76,3.72,3.70,3.68,3.62,2.8]
      },{
        c:.5,
        volts:[4.2,3.96,3.86,3.78,3.74,3.68,3.66,3.62,3.60,3.54,2.7]
      },{
        c:.1,
        volts:[4.2,3.86,3.74,3.70,3.62,3.60,3.56,3.52,3.48,3.40,2.5]
      },{
        c:2,
        volts:[4.2,3.64,3.58,3.52,3.48,3.42,3.40,3.36,3.30,3.18,2.2]
      },{
        c:300,
        volts:[4.2,3.48,3.40,3.36,3.30,3.26,3.22,3.16,3.08,2.60,1.5]
      },
    ]
  },
  batteries:{
    'samsung-30q-18650-3000mah-15a-flat-top-battery':{
      weight:46.1,
      cellAmps:15,
      cellAmpHours:3000,
      pricePerCell:4.15,
      brand:'Samsung',
      model:'30Q',
    },
    'samsung-35e-18650-3500mah-10a-flat-top-battery':{
      weight:47.9,
      cellAmps:8,
      cellAmpHours:3500,
      pricePerCell:5,
      brand:'Samsung',
      model:'35E',
    },
    'samsung-33g-18650-3500mah-6-5a-flat-top-battery':{
      weight:47.9,
      cellAmps:6.5,
      cellAmpHours:3300,
      pricePerCell:3.65,
      brand:'Samsung',
      model:'33G',
    },
    'samsung-29e-18650-2850mah-2-75a-flat-top-battery':{
      weight:45.3,
      cellAmps:2.75,
      cellAmpHours:2850,
      pricePerCell:3.25,
      brand:'Samsung',
      model:'29E',
    },
    'samsung-26f-18650-2600mah-5a-protected-button-top-battery':{
      weight:46.5,
      cellAmps:5.2,
      cellAmpHours:2600,
      pricePerCell:3,
      brand:'Samsung',
      model:'26F',
      protected:true,
    },
    'samsung-25r-18650-rechargeable-battery':{
      weight:43.71,
      cellAmps:20,
      cellAmpHours:2500,
      pricePerCell:3.35,
      brand:'Samsung',
      model:'25R',
    },
    'samsung-22p-18650-2200mah-10a-flat-top-battery':{
      weight:42.9,
      cellAmps:10,
      cellAmpHours:2200,
      pricePerCell:2.85,
      brand:'Samsung',
      model:'22P',
    },
    'samsung-22f-18650-2200mah-4-4a-flat-top-battery':{
      weight:40.9,
      cellAmps:4.4,
      cellAmpHours:2200,
      pricePerCell:2.35,
      brand:'Samsung',
      model:'22F',
    },
    'samsung-20s-18650-2000mah-30a-battery':{
      weight:40.9,
      cellAmps:30,
      cellAmpHours:2000,
      pricePerCell:5,
      brand:'Samsung',
      model:'20S',
    },
    'samsung-20r-18650-2000mah-22a-flat-top-battery':{
      weight:42.5,
      cellAmps:22,
      cellAmpHours:2000,
      pricePerCell:2.95,
      brand:'Samsung',
      model:'20R',
    },
    'samsung-20q-18650-2000mah-15a-flat-top-battery':{
      weight:43.3,
      cellAmps:15,
      cellAmpHours:2000,
      pricePerCell:3,
      brand:'Samsung',
      model:'20Q',
    },
    'samsung-15m-18650-1500mah-23a-flat-top-battery':{
      weight:41.9,
      cellAmps:23,
      cellAmpHours:1500,
      pricePerCell:3.15,
      brand:'Samsung',
      model:'20Q',
    },
    'panasonic-ncr18650pf-2900mah-10a-flat-top-battery':{
      weight:45.3,
      cellAmps:10,
      cellAmpHours:2900,
      pricePerCell:3.25,
      brand:'Panasonic',
      model:'NCR18650PF',
    },
    'panasonic-ncr18650b-18650-3400mah-4-8a-button-top-battery':{
      weight:46.7,
      cellAmps:6.8,
      cellAmpHours:3400,
      pricePerCell:4.60,
      brand:'Panasonic',
      model:'NCR18650B',
    },
    'sony-vtc6-18650-3000mah-15a-flat-top-battery':{
      weight:46.8,
      cellAmps:15,
      cellAmpHours:3000,
      pricePerCell:5,
      brand:'Sony',
      model:'US18650VTC6',
    },
    'sony-vtc5a-18650-2600mah-25a-flat-top-battery':{
      weight:47.8,
      cellAmps:25,
      cellAmpHours:2600,
      pricePerCell:5.85,
      brand:'Sony',
      model:'US18650VTC5A',
    },
    'sony-vtc5-18650-2600mah-20a-flat-top-battery':{
      weight:44.1,
      cellAmps:20,
      cellAmpHours:2600,
      pricePerCell:4.65,
      brand:'Sony',
      model:'US18650VTC5',
    },
    'samsung-48g-21700-4800mah-flat-top-battery':{
      weight:67.4,
      cellAmps:15,
      cellAmpHours:4800,
      pricePerCell:8,
      brand:'Samsung',
      model:'30Q',
    }
  },
  display:{
    size:{
      width:100,
      height:100,
    }
  },
  inputs:{
    volts:52,
    ampHours:10.5,
    minMiles:10,
    minAmps:20,
    minC:2,
    cellType:'samsung-30q-18650-3000mah-15a-flat-top-battery',
    cellAmpHours:4800,
    cellVolts:3.7,
    cellAmps:10,
    series:14,
    parallel:3,
    cellsPerRow:7,
    weight:143,
    milesPerKwh:26,
    width:18,
    height:67.4,
    protected:false,
    layout:0,
    controllerAmps:20,
    pricePerCell:8,
    maxCharge:80,
    minCharge:25,
    throttle:70,
  },
}