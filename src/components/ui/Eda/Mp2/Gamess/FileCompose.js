export const head =
`!--- SYSTEM memory control, change memddi for machines with less than 32gb of memory.
 $system mwords=200 memddi=2600 PARALL=.TRUE. 
 $end
!--- MAIN calculation parameters
 $contrl coord=unique units=angs mplevl=2 pp=read runtyp=eda ispher=1
exetyp=run maxit=200 icharg=0 mult=1 scftyp=rhf
 $end
 $guess guess=huckel $end
!--- SCF tricks like lvlshift and damping
 $scf npunch=2 dirscf=.t.
diis=.t. ethrsh=2.0 swdiis=0.005 damp=.t. shift=.t. 
 $end
!--- MP2 parameters
 $mp2 code=ddi scspt=scs $end
!--- BASIS SET manual definitions
 $basis
basnam(1)=amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,
metal, amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,amet,
amet,amet,amet
 $end
!--- LMO-EDA parameters: frag1-> NO+, frag2-> DMSO, frag3-> [RuCl3Im]-
 $lmoeda
matom(1)=2 matom(2)=10 matom(3)=16
mcharg(1)=1 mcharg(2)=0 mcharg(3)=-1
mmult(1)=1,1,1 supbas=.t. 
 $end
!--- XYZ Cartesian Coordinates
 $data
scan1-eda-no-dmso
c1`;
export const dict = (val) => ({
  1: 
`H    1.0    ${val}`,
  6:
`C    6.0    ${val}`,
  7:
`N    7.0    ${val}`,
  8:
`O    8.0    ${val}`,
  16:
`S    16.0    ${val}`,
  17:
`Cl    17.0    ${val}`,
  44:
`Ru    44.0    ${val}`,
});
export const middle = 
` $end
!--- Ametal basis set = CC-PVDZ
 $amet
CCD

 $end
!--- Ru (metal) basis set = SBKJC
 $metal
sbkjc

 $end
!--- Ru ECP = SBKJC, NONE for other atoms.
 $ECP`;
export const dict2 = (val) => ({
  1: 
`H-ECP NONE`,
  6:
`C-ECP NONE`,
  7:
`N-ECP NONE`,
  8:
`O-ECP NONE`,
  16:
`S-ECP NONE`,
  17:
`Cl-ECP NONE`,
  44:
`Ru-ECP SBKJC`,
})
export const tail = ` $END`;
