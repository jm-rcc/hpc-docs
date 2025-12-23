# LLVM 11.1.0  
![Static Badge](https://img.shields.io/badge/class-compiler-D7D1CC)  
  
  
The LLVM Core libraries provide a modern source- and target-independent
 optimizer, along with code generation support for many popular CPUs
 (as well as some less common ones!) These libraries are built around a well
 specified code representation known as the LLVM intermediate representation
 ("LLVM IR"). The LLVM Core libraries are well documented, and it is
 particularly easy to invent your own language (or port an existing compiler)
 to use LLVM as an optimizer and code generator.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load llvm/.11.1.0-gcccore-10.3.0`**.  
  
### Toolchain  
GCCcore (10.3.0)  
  
### Toolchain Options  
{'cstd': 'gnu++11', 'pic': True}  
  
  
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
[ncurses 6.2  (GCCcore 10.3.0)](../hpc-docs/modules/llvm-.11.1.0-gcccore-10.3.0.md)  
[zlib 1.2.11  (GCCcore 10.3.0)](../hpc-docs/modules/llvm-.11.1.0-gcccore-10.3.0.md)  
  
## Homepage  
The homepage for LLVM 11.1.0 .  
[https://llvm.org/](https://llvm.org/)  
