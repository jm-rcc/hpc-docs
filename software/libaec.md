[List of Software](../software_shortlist.md)  
# libaec  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
## Homepage  
[https://gitlab.dkrz.de/k202009/libaec](https://gitlab.dkrz.de/k202009/libaec)  
## Installed versions  
  
| Version | Toolchain | Module | Architecture 
| :--------- | :--- | :--- | ---: |  
 | libaec 1.0.6 | GCCcore-12.3.0 | [libaec/1.0.6-gcccore-12.3.0](../modules/libaec-1.0.6-gcccore-12.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3) ![Static Badge](https://img.shields.io/badge/xeonsp4--H100-00A2C7) ![Static Badge](https://img.shields.io/badge/xeonsp4-C2BFBC)  |  
  
Libaec provides fast lossless compression of 1 up to 32 bit wide signed or unsigned integers
(samples). The library achieves best results for low entropy data as often encountered in space imaging
instrument data or numerical model output from weather or climate simulations. While floating point representations
are not directly supported, they can also be efficiently coded by grouping exponents and mantissa.  
  
----  
  
