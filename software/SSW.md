[List of Software](../software_shortlist.md)  
# SSW  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
## Homepage  
[https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library](https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library)  
## Installed versions  
  
| Version | Toolchain | Module | Architecture 
| :--------- | :--- | :--- | ---: |  
 | SSW 1.1 | GCCcore-10.3.0 | [ssw/1.1-gcccore-10.3.0](../modules/ssw-1.1-gcccore-10.3.0.md) | ![Static Badge](https://img.shields.io/badge/epyc3--A100-ADA9A6) ![Static Badge](https://img.shields.io/badge/epyc3--H100-4085C6) ![Static Badge](https://img.shields.io/badge/epyc3--L40-BB9D65) <br> ![Static Badge](https://img.shields.io/badge/epyc3--mi210-FBB800) ![Static Badge](https://img.shields.io/badge/epyc3-D7D1CC) ![Static Badge](https://img.shields.io/badge/epyc4--A16-999490) ![Static Badge](https://img.shields.io/badge/epyc4--L40s-2EA836) <br> ![Static Badge](https://img.shields.io/badge/epyc4--mi210%2Fepyc4--mi300x-EB602B) ![Static Badge](https://img.shields.io/badge/epyc4-D6D4D3)  |  
  
SSW is a fast implementation of the Smith-Waterman algorithm, which uses the
 Single-Instruction Multiple-Data (SIMD) instructions to parallelize the algorithm at the
 instruction level. SSW library provides an API that can be flexibly used by programs written in
 C, C++ and other languages. We also provide a software that can do protein and genome alignment
 directly. Current version of our implementation is ~50 times faster than an ordinary
 Smith-Waterman. It can return the Smith-Waterman score, alignment location and traceback path
 (cigar) of the optimal alignment accurately; and return the sub-optimal alignment score and
 location heuristically.  
  
----  
  
