# hwloc 2.11.2  
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
The homepage for hwloc 2.11.2 
[https://www.open-mpi.org/projects/hwloc/](https://www.open-mpi.org/projects/hwloc/)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load hwloc/.2.11.2-gcccore-14.2.0`**  
  
### Toolchain  
GCCcore-14.2.0  
  
### Toolchain Options  
(none)  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
hwloc depends on the following modules, and they will be loaded automatically with this module.  
  
[numactl 2.0.19  (GCCcore-14.2.0)](numactl-.2.0.19-gcccore-14.2.0.md)  
[libxml2 2.13.4  (GCCcore-14.2.0)](libxml2-.2.13.4-gcccore-14.2.0.md)  
[libpciaccess 0.18.1  (GCCcore-14.2.0)](libpciaccess-.0.18.1-gcccore-14.2.0.md)  
  
## Dependency of modules  
The following modules will load hwloc as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
