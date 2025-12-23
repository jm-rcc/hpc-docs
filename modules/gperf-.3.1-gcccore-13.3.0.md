# gperf 3.1  
![Static Badge](https://img.shields.io/badge/class-devel-D7D1CC)  
  
  

 GNU gperf is a perfect hash function generator. For a given list of strings,
 it produces a hash function and hash table, in form of C or C++ code, for
 looking up a value depending on the input string. The hash function is
 perfect, which means that the hash table has no collisions, and the hash
 table lookup needs a single string comparison only.
  
  
  
## Homepage  
The homepage for gperf 3.1 
[https://www.gnu.org/software/gperf/](https://www.gnu.org/software/gperf/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load gperf/.3.1-gcccore-13.3.0`**  
  
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
gperf depends on the following modules, and they will be loaded automatically with this module.  
  
(none)  
  
## Dependency of modules  
The following modules will load gperf as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
