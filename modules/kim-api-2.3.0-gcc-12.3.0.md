# kim-api 2.3.0  
![Static Badge](https://img.shields.io/badge/class-chem-D7D1CC)  
  
  
Open Knowledgebase of Interatomic Models.

KIM is an API and OpenKIM is a collection of interatomic models (potentials) for
atomistic simulations.  This is a library that can be used by simulation programs
to get access to the models in the OpenKIM database.

This EasyBuild only installs the API, the models can be installed with the
package openkim-models, or the user can install them manually by running
    kim-api-collections-management install user MODELNAME
or
    kim-api-collections-management install user OpenKIM
to install them all.
   
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load kim-api/2.3.0-gcc-12.3.0`**.  
  
### Toolchain  
GCC (12.3.0)  
  
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
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
[CMake 3.26.3  (GCCcore 12.3.0)](../hpc-docs/modules/kim-api-2.3.0-gcc-12.3.0.md)  
  
## Homepage  
The homepage for kim-api 2.3.0 .  
[https://openkim.org/](https://openkim.org/)  
