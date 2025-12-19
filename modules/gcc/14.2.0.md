# GCC 14.2.0  
(compiler)  
  
  
The GNU Compiler Collection includes front ends for C, C++, Objective-C, Fortran, Java, and Ada,
 as well as libraries for these languages (libstdc++, libgcj,...).  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load gcc/14.2.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
dependencies = [
    ('GCCcore', version),
    # binutils built on top of GCCcore, which was built on top of binutils (built with system toolchain)
    ('binutils', '2.42', '', ('GCCcore', version)),
]  
  
