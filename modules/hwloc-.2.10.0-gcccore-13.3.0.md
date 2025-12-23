# hwloc 2.10.0  
![Static Badge](https://img.shields.io/badge/class-system-D7D1CC)  
  
  

 The Portable Hardware Locality (hwloc) software package provides a portable
 abstraction (across OS, versions, architectures, ...) of the hierarchical
 topology of modern architectures, including NUMA memory nodes, sockets, shared
 caches, cores and simultaneous multithreading. It also gathers various system
 attributes such as cache and memory information as well as the locality of I/O
 devices such as network interfaces, InfiniBand HCAs or GPUs. It primarily
 aims at helping applications with gathering information about modern computing
 hardware so as to exploit it accordingly and efficiently.
  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load hwloc/.2.10.0-gcccore-13.3.0`**.  
  
### Toolchain  
GCCcore (13.3.0)  
  
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
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
[numactl 2.0.18  (GCCcore 13.3.0)](link)  
[libxml2 2.12.7  (GCCcore 13.3.0)](link)  
[libpciaccess 0.18.1  (GCCcore 13.3.0)](link)  
  
## Homepage  
The homepage for hwloc 2.10.0 .  
[https://www.open-mpi.org/projects/hwloc/](https://www.open-mpi.org/projects/hwloc/)  
