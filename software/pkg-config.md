[List of Software](../software_shortlist.md)  
# pkg-config  
![Static Badge](https://img.shields.io/badge/class-devel-D7D1CC)  
## Homepage  
[https://www.freedesktop.org/wiki/Software/pkg-config/](https://www.freedesktop.org/wiki/Software/pkg-config/)  
## Installed versions  
  
| Version | Toolchain | Module | Architecture 
| :--------- | :--- | :--- | ---: |  
 | pkg-config 0.29.2 | GCCcore-11.3.0 | [pkg-config/0.29.2-gcccore-11.3.0](../modules/pkg-config-.0.29.2-gcccore-11.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) <br> ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) <br> ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) <br> ![Static Badge](https://img.shields.io/badge/epyc4--mi210%2Fepyc4--mi300x-EB602B) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3) ![Static Badge](https://img.shields.io/badge/xeonsp4--H100-00A2C7) <br> ![Static Badge](https://img.shields.io/badge/xeonsp4-C2BFBC)  |  
 | pkg-config 0.29.2 | GCCcore-10.3.0 | [pkg-config/0.29.2-gcccore-10.3.0](../modules/pkg-config-.0.29.2-gcccore-10.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) <br> ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) <br> ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) <br> ![Static Badge](https://img.shields.io/badge/epyc4--mi210%2Fepyc4--mi300x-EB602B) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3) ![Static Badge](https://img.shields.io/badge/xeonsp4--H100-00A2C7) <br> ![Static Badge](https://img.shields.io/badge/xeonsp4-C2BFBC)  |  
  
pkg-config is a helper tool used when compiling applications and libraries.
 It helps you insert the correct compiler options on the command line so an
 application can use gcc -o test test.c `pkg-config --libs --cflags glib-2.0`
 for instance, rather than hard-coding values on where to find glib (or other
 libraries).  
  
----  
  
