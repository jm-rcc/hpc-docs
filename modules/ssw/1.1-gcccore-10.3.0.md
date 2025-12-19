# SSW 1.1  
(lib)  
  
  
SSW is a fast implementation of the Smith-Waterman algorithm, which uses the
 Single-Instruction Multiple-Data (SIMD) instructions to parallelize the algorithm at the
 instruction level. SSW library provides an API that can be flexibly used by programs written in
 C, C++ and other languages. We also provide a software that can do protein and genome alignment
 directly. Current version of our implementation is ~50 times faster than an ordinary
 Smith-Waterman. It can return the Smith-Waterman score, alignment location and traceback path
 (cigar) of the optimal alignment accurately; and return the sub-optimal alignment score and
 location heuristically.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load ssw/1.1-gcccore-10.3.0`** to load the module on Bunya.  
  
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
dependencies = [('binutils', '2.36.1')]

dependencies = [('zlib', '1.2.11')]

start_dir = 'src'

buildopts = 'default'

files_to_copy = [
    (['ssw_test'], 'bin'),
    (['*.%s*' % SHLIB_EXT], 'lib'),
    (['*.h'], 'include/ssw'),
]  
  
