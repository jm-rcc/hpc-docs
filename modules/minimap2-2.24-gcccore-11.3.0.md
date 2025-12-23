[List of Software](../software_shortlist.md)  
# minimap2 2.24 
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  
Minimap2 is a fast sequence mapping and alignment
program that can find overlaps between long noisy reads, or map long
reads or their assemblies to a reference genome optionally with detailed
alignment (i.e. CIGAR). At present, it works efficiently with query
sequences from a few kilobases to ~100 megabases in length at an error
rate ~15%. Minimap2 outputs in the PAF or the SAM format. On limited
test data sets, minimap2 is over 20 times faster than most other
long-read aligners. It will replace BWA-MEM for long reads and contig
alignment.  
  
  
## Homepage  
The homepage for minimap2 2.24  
[https://github.com/lh3/minimap2](https://github.com/lh3/minimap2)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load minimap2/2.24-gcccore-11.3.0`**  
  
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
minimap2 depends on the following modules, and they will be loaded automatically with this module.  
  
[zlib 1.2.12  (GCCcore-11.3.0)](zlib-.1.2.12-gcccore-11.3.0.md)  
  
  
## Other available modules  
These other versions of minimap2 are available on Bunya.  
[minimap2/2.24-gcccore-11.3.0](../modules/minimap2-2.24-gcccore-11.3.0.md)  
  
