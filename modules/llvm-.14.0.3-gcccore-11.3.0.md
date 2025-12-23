[List of Software](../software_shortlist.md)  
# LLVM 14.0.3  
![Static Badge](https://img.shields.io/badge/class-compiler-D7D1CC)  
  
  
The LLVM Core libraries provide a modern source- and target-independent
 optimizer, along with code generation support for many popular CPUs
 (as well as some less common ones!) These libraries are built around a well
 specified code representation known as the LLVM intermediate representation
 ("LLVM IR"). The LLVM Core libraries are well documented, and it is
 particularly easy to invent your own language (or port an existing compiler)
 to use LLVM as an optimizer and code generator.  
  
  
## Homepage  
The homepage for LLVM 14.0.3   
[https://llvm.org/](https://llvm.org/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load llvm/.14.0.3-gcccore-11.3.0`**  
  
### Toolchain  
GCCcore-11.3.0  
  
### Toolchain Options  
cstd: gnu++11  
pic: True  
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
LLVM depends on the following modules, and they will be loaded automatically with this module.  
  
[ncurses 6.3  (GCCcore-11.3.0)](ncurses-.6.3-gcccore-11.3.0.md)  
[zlib 1.2.12  (GCCcore-11.3.0)](zlib-.1.2.12-gcccore-11.3.0.md)  
  
## Loaded by  
The following modules will load LLVM as dependency.  
  
[Mesa 22.0.3  (GCCcore-11.3.0)](mesa-22.0.3-gcccore-11.3.0.md)  
  
