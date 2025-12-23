[List of Software](../software_shortlist.md)  
# kim-api 2.2.1 
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
   
  
  
## Homepage  
The homepage for kim-api 2.2.1  
[https://openkim.org/](https://openkim.org/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load kim-api/2.2.1-gcc-10.3.0`**  
  
### Toolchain  
GCC-10.3.0  
  
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
  
  
## Dependencies  
kim-api depends on the following modules, and they will be loaded automatically with this module.  
  
[CMake 3.20.1  (GCCcore-10.3.0)](cmake-3.20.1-gcccore-10.3.0.md)  
  
## Loaded by  
The following modules will load kim-api as dependency.  
  
[LAMMPS 23Jun2022 -kokkos (foss-2021a)](lammps-23jun2022-foss-2021a-kokkos.md)  
  
## Other available modules  
These other versions of kim-api are available on Bunya.  
[kim-api/2.3.0-gcc-12.3.0](../modules/kim-api-2.3.0-gcc-12.3.0.md)  
kim-api/2.2.1-gcc-10.3.0  
