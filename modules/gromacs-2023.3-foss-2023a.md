[List of Software](../software_shortlist.md)  
# GROMACS 2023.3 
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  

GROMACS is a versatile package to perform molecular dynamics, i.e. simulate the
Newtonian equations of motion for systems with hundreds to millions of
particles.

This is a CPU only build, containing both MPI and threadMPI binaries
for both single and double precision.

It also contains the gmxapi extension for the single precision MPI build.
  
  
  
## Homepage  
The homepage for GROMACS 2023.3  
[https://www.gromacs.org](https://www.gromacs.org)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load gromacs/2023.3-foss-2023a`**  
  
### Toolchain  
foss-2023a  
  
### Toolchain Options  
openmp: True  
usempi: True  
## Available on architecture types  
- epyc3  
- epyc4  
- xeonsp4  
  
  
## Dependencies  
GROMACS depends on the following modules, and they will be loaded automatically with this module.  
  
[Python 3.11.3  (GCCcore-12.3.0)](python-3.11.3-gcccore-12.3.0.md)  
[SciPy-bundle 2023.07  (gfbf-2023a)](scipy-bundle-2023.07-gfbf-2023a.md)  
[networkx 3.1  (gfbf-2023a)](networkx-.3.1-gfbf-2023a.md)  
[mpi4py 3.1.4  (gompi-2023a)](mpi4py-3.1.4-gompi-2023a.md)  
  
  
## Other available modules  
These other versions of GROMACS are available on Bunya.  
[gromacs/2023.3-foss-2023a-cuda-12.1.1-plumed-2.9.0](../modules/gromacs-2023.3-foss-2023a-cuda-12.1.1-plumed-2.9.0.md)  
gromacs/2023.3-foss-2023a  
[gromacs/2021.3-foss-2021a](../modules/gromacs-2021.3-foss-2021a.md)  
