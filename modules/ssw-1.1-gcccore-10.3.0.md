[List of Software](../software_shortlist.md)  
# SSW 1.1  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  
SSW is a fast implementation of the Smith-Waterman algorithm, which uses the
 Single-Instruction Multiple-Data (SIMD) instructions to parallelize the algorithm at the
 instruction level. SSW library provides an API that can be flexibly used by programs written in
 C, C++ and other languages. We also provide a software that can do protein and genome alignment
 directly. Current version of our implementation is ~50 times faster than an ordinary
 Smith-Waterman. It can return the Smith-Waterman score, alignment location and traceback path
 (cigar) of the optimal alignment accurately; and return the sub-optimal alignment score and
 location heuristically.
  
  
  
## Homepage  
The homepage for SSW 1.1   
[https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library](https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load ssw/1.1-gcccore-10.3.0`**  
  
### Toolchain  
GCCcore-10.3.0  
  
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
SSW depends on the following modules, and they will be loaded automatically with this module.  
  
[zlib 1.2.11  (GCCcore-10.3.0)](zlib-.1.2.11-gcccore-10.3.0.md)  
  
## Loaded by  
The following modules will load SSW as dependency.  
  
[SeqLib 1.2.0  (GCC-10.3.0)](seqlib-1.2.0-gcc-10.3.0.md)  
  
