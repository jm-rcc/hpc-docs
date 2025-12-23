[List of Software](../software_shortlist.md)  
# libunwind 1.8.1 
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
The primary goal of libunwind is to define a portable and efficient C programming interface
 (API) to determine the call-chain of a program. The API additionally provides the means to manipulate the
 preserved (callee-saved) state of each call-frame and to resume execution at any point in the call-chain
 (non-local goto). The API supports both local (same-process) and remote (across-process) operation.
 As such, the API is useful in a number of applications  
  
  
## Homepage  
The homepage for libunwind 1.8.1  
[https://www.nongnu.org/libunwind/](https://www.nongnu.org/libunwind/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load libunwind/.1.8.1-gcccore-13.3.0`**  
  
### Toolchain  
GCCcore-13.3.0  
  
### Toolchain Options  
(none)  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- xeonsp4 h100  
  
  
## Dependencies  
libunwind depends on the following modules, and they will be loaded automatically with this module.  
  
[XZ 5.4.5  (GCCcore-13.3.0)](xz-.5.4.5-gcccore-13.3.0.md)  
  
## Loaded by  
The following modules will load libunwind as dependency.  
  
[Mesa 24.1.3  (GCCcore-13.3.0)](mesa-24.1.3-gcccore-13.3.0.md)  
  
## Other available modules  
These other versions of libunwind are available on Bunya.  
[libunwind/1.8.1-gcccore-13.3.0](../modules/libunwind-.1.8.1-gcccore-13.3.0.md)  
[libunwind/1.6.2-gcccore-12.3.0](../modules/libunwind-.1.6.2-gcccore-12.3.0.md)  
[libunwind/1.6.2-gcccore-11.3.0](../modules/libunwind-.1.6.2-gcccore-11.3.0.md)  
[libunwind/1.4.0-gcccore-10.3.0](../modules/libunwind-.1.4.0-gcccore-10.3.0.md)  
