# libunwind 1.6.2  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
The primary goal of libunwind is to define a portable and efficient C programming interface
 (API) to determine the call-chain of a program. The API additionally provides the means to manipulate the
 preserved (callee-saved) state of each call-frame and to resume execution at any point in the call-chain
 (non-local goto). The API supports both local (same-process) and remote (across-process) operation.
 As such, the API is useful in a number of applications  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load libunwind/.1.6.2-gcccore-12.3.0`**.  
  
### Toolchain  
GCCcore (12.3.0)  
  
### Toolchain Options  
None  
  
  
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
[XZ 5.4.2  (GCCcore 12.3.0)](../hpc-docs/modules/libunwind-.1.6.2-gcccore-12.3.0.md)  
  
## Homepage  
The homepage for libunwind 1.6.2 .  
[https://www.nongnu.org/libunwind/](https://www.nongnu.org/libunwind/)  
