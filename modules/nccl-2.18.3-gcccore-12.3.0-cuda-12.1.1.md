# NCCL 2.18.3 -CUDA-12.1.1 
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
The NVIDIA Collective Communications Library (NCCL) implements multi-GPU and multi-node collective
communication primitives that are performance optimized for NVIDIA GPUs.  
  
  
## Homepage  
The homepage for NCCL 2.18.3 -CUDA-12.1.1
[https://developer.nvidia.com/nccl](https://developer.nvidia.com/nccl)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load nccl/2.18.3-gcccore-12.3.0-cuda-12.1.1`**  
  
### Toolchain  
GCCcore-12.3.0  
  
### Toolchain Options  
(none)  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc4 a16  
- epyc4 l40s  
- xeonsp4 h100  
  
  
## Dependencies  
NCCL depends on the following modules, and they will be loaded automatically with this module.  
  
[CUDA 12.1.1  (system-system)](cuda-12.1.1.md)  
[UCX-CUDA 1.14.1 -CUDA-12.1.1 (GCCcore-12.3.0)](ucx-cuda-1.14.1-gcccore-12.3.0-cuda-12.1.1.md)  
  
## Dependency of modules  
The following modules will load NCCL as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
