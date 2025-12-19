# foss 2025a  
(toolchain)  
  
  
GNU Compiler Collection (GCC) based compiler toolchain, including
 OpenMPI for MPI support, OpenBLAS (BLAS and LAPACK support), FFTW and ScaLAPACK.  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load foss/2025a`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
dependencies = [
    ('GCC', local_gccver),
    ('OpenMPI', '5.0.7', '', ('GCC', local_gccver)),
    ('FlexiBLAS', '3.4.5', '', ('GCC', local_gccver)),
    ('FFTW', '3.3.10', '', ('GCC', local_gccver)),
    ('FFTW.MPI', '3.3.10', '', local_comp_mpi_tc),
    ('ScaLAPACK', '2.2.2', '-fb', local_comp_mpi_tc),
]  
  
