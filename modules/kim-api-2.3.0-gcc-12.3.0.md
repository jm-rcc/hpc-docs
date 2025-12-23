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
   
  
  
## Homepage  
The homepage for kim-api 2.3.0 
[https://openkim.org/](https://openkim.org/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load kim-api/2.3.0-gcc-12.3.0`**  
  
### Toolchain  
GCC-12.3.0  
  
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
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
kim-api depends on the following modules, and they will be loaded automatically with this module.  
  
[CMake 3.26.3  (GCCcore-12.3.0)](cmake-3.26.3-gcccore-12.3.0.md)  
  
## Dependency of modules  
The following modules will load kim-api as dependency.  
  
[LAMMPS 2Aug2023_update2 -kokkos (foss-2023a)](lammps-2aug2023_update2-foss-2023a-kokkos.md)  
[LAMMPS 2Aug2023_update2 -kokkos-CUDA-12.1.1 (foss-2023a)](lammps-2aug2023_update2-foss-2023a-kokkos-cuda-12.1.1.md)  
  
----  
  
[List of Software](../software_shortlist.md)  
