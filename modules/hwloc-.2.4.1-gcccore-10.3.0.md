[List of Software](../software_shortlist.md)  
# hwloc 2.4.1  
![Static Badge](https://img.shields.io/badge/class-system-D7D1CC)  
  
  

 The Portable Hardware Locality (hwloc) software package provides a portable
 abstraction (across OS, versions, architectures, ...) of the hierarchical
 topology of modern architectures, including NUMA memory nodes, sockets, shared
 caches, cores and simultaneous multithreading. It also gathers various system
 attributes such as cache and memory information as well as the locality of I/O
 devices such as network interfaces, InfiniBand HCAs or GPUs. It primarily
 aims at helping applications with gathering information about modern computing
 hardware so as to exploit it accordingly and efficiently.
  
  
  
## Homepage  
The homepage for hwloc 2.4.1   
[https://www.open-mpi.org/projects/hwloc/](https://www.open-mpi.org/projects/hwloc/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load hwloc/.2.4.1-gcccore-10.3.0`**  
  
### Toolchain  
GCCcore-10.3.0  
  
### Toolchain Options  
vectorize: False  
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
hwloc depends on the following modules, and they will be loaded automatically with this module.  
  
[numactl 2.0.14  (GCCcore-10.3.0)](numactl-.2.0.14-gcccore-10.3.0.md)  
[libxml2 2.9.10  (GCCcore-10.3.0)](libxml2-.2.9.10-gcccore-10.3.0.md)  
[libpciaccess 0.16  (GCCcore-10.3.0)](libpciaccess-.0.16-gcccore-10.3.0.md)  
  
## Loaded by  
The following modules will load hwloc as dependency.  
  
[Clang 12.0.1  (GCCcore-10.3.0)](clang-12.0.1-gcccore-10.3.0.md)  
[OpenMPI 4.1.1  (GCC-10.3.0)](openmpi-4.1.1-gcc-10.3.0.md)  
[PMIx 3.2.3  (GCCcore-10.3.0)](pmix-3.2.3-gcccore-10.3.0.md)  
  
