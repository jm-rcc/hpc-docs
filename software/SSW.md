[< Software](../software_shortlist.md)  
# SSW  
category: https://github.com/google/snappy  
## Homepage  
[https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library](https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library)  
## Installed versions  
  
| Module | Version | Toolchain | Options |  
| :--- | :--- | :--- | :--- |  
 | ssw/1.1-gcccore-10.3.0 | 1.1 | GCCcore-10.3.0 |  |  
  
SSW is a fast implementation of the Smith-Waterman algorithm, which uses the
 Single-Instruction Multiple-Data (SIMD) instructions to parallelize the algorithm at the
 instruction level. SSW library provides an API that can be flexibly used by programs written in
 C, C++ and other languages. We also provide a software that can do protein and genome alignment
 directly. Current version of our implementation is ~50 times faster than an ordinary
 Smith-Waterman. It can return the Smith-Waterman score, alignment location and traceback path
 (cigar) of the optimal alignment accurately; and return the sub-optimal alignment score and
 location heuristically.  
  
----  
  
