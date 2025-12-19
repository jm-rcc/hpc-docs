# FastANI 1.33  
(bio)  
  
  
FastANI is developed for fast alignment-free computation of
 whole-genome Average Nucleotide Identity (ANI). ANI is defined as mean
 nucleotide identity of orthologous gene pairs shared between two microbial
 genomes. FastANI supports pairwise comparison of both complete and draft
 genome assemblies.  
  
  
### Toolchain  
{'name': 'GCC', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load fastani/1.33-gcc-10.3.0`** to load the module on Bunya.  
  
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
dependencies = [('Autotools', '20210128')]

dependencies = [
    ('GSL', '2.7'),
    ('zlib', '1.2.11'),
]  
  
