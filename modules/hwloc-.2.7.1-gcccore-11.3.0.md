# hwloc 2.7.1  
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
The homepage for hwloc 2.7.1 
[https://www.open-mpi.org/projects/hwloc/](https://www.open-mpi.org/projects/hwloc/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load hwloc/.2.7.1-gcccore-11.3.0`**  
  
### Toolchain  
GCCcore-11.3.0  
  
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
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
hwloc depends on the following modules, and they will be loaded automatically with this module.  
  
[numactl 2.0.14  (GCCcore-11.3.0)](numactl-.2.0.14-gcccore-11.3.0.md)  
[libxml2 2.9.13  (GCCcore-11.3.0)](libxml2-.2.9.13-gcccore-11.3.0.md)  
[libpciaccess 0.16  (GCCcore-11.3.0)](libpciaccess-.0.16-gcccore-11.3.0.md)  
  
## Dependency of modules  
The following modules will load hwloc as dependency.  
  
[Clang 13.0.1  (GCCcore-11.3.0)](clang-13.0.1-gcccore-11.3.0.md)  
[Clang 15.0.5  (GCCcore-11.3.0)](clang-15.0.5-gcccore-11.3.0.md)  
[OpenMPI 4.1.4  (GCC-11.3.0)](openmpi-4.1.4-gcc-11.3.0.md)  
[PMIx 4.1.2  (GCCcore-11.3.0)](pmix-4.1.2-gcccore-11.3.0.md)  
[pocl 1.8  (GCC-11.3.0)](pocl-1.8-gcc-11.3.0.md)  
[tbb 2021.5.0  (GCCcore-11.3.0)](tbb-2021.5.0-gcccore-11.3.0.md)  
  
----  
  
[List of Software](../software_shortlist.md)  
