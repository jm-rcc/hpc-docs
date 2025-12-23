# libaec 1.0.6  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
Libaec provides fast lossless compression of 1 up to 32 bit wide signed or unsigned integers
(samples). The library achieves best results for low entropy data as often encountered in space imaging
instrument data or numerical model output from weather or climate simulations. While floating point representations
are not directly supported, they can also be efficiently coded by grouping exponents and mantissa.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load libaec/1.0.6-gcccore-12.3.0`**.  
  
### Toolchain  
GCCcore-12.3.0  
  
### Toolchain Options  
None  
  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
(none)  
  
## Homepage  
The homepage for libaec 1.0.6 .  
[https://gitlab.dkrz.de/k202009/libaec](https://gitlab.dkrz.de/k202009/libaec)  
