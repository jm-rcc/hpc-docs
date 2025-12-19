# minimap2 2.24  
(bio)  
  
  
Minimap2 is a fast sequence mapping and alignment
program that can find overlaps between long noisy reads, or map long
reads or their assemblies to a reference genome optionally with detailed
alignment (i.e. CIGAR). At present, it works efficiently with query
sequences from a few kilobases to ~100 megabases in length at an error
rate ~15%. Minimap2 outputs in the PAF or the SAM format. On limited
test data sets, minimap2 is over 20 times faster than most other
long-read aligners. It will replace BWA-MEM for long reads and contig
alignment.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '11.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load minimap2/2.24-gcccore-11.3.0`** to load the module on Bunya.  
  
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
dependencies = [('binutils', '2.38')]

dependencies = [('zlib', '1.2.12')]

buildopts = 'CC="${CC}" CFLAGS="${CFLAGS}" INCLUDES="${CPPFLAGS}"'

files_to_copy = [
    (['%(name)s'], 'bin'),
    (['lib%(name)s.a'], 'lib'),
    (['*.h'], 'include'),
    'LICENSE.txt', 'NEWS.md', 'README.md',
    (['%(name)s.1'], 'share/man/man1'),
    (['test/MT-human.fa', 'test/MT-orang.fa'], 'test'),
]  
  
