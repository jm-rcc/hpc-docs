[List of Software](../software_shortlist.md)  
# pkg-config 0.29.2  
![Static Badge](https://img.shields.io/badge/class-devel-D7D1CC)  
  
  

 pkg-config is a helper tool used when compiling applications and libraries.
 It helps you insert the correct compiler options on the command line so an
 application can use gcc -o test test.c `pkg-config --libs --cflags glib-2.0`
 for instance, rather than hard-coding values on where to find glib (or other
 libraries).
  
  
  
## Homepage  
The homepage for pkg-config 0.29.2   
[https://www.freedesktop.org/wiki/Software/pkg-config/](https://www.freedesktop.org/wiki/Software/pkg-config/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load pkg-config/.0.29.2-gcccore-10.3.0`**  
  
### Toolchain  
GCCcore-10.3.0  
  
### Toolchain Options  
(none)  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
pkg-config depends on the following modules, and they will be loaded automatically with this module.  
  
(none)  
  
## Loaded by  
The following modules will load pkg-config as dependency.  
  
[pkgconfig 1.5.4 -python (GCCcore-10.3.0)](pkgconfig-1.5.4-gcccore-10.3.0-python.md)  
  
