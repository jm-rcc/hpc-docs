# Bowtie2 2.4.4  
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  
 Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads
 to long reference sequences. It is particularly good at aligning reads of about 50 up to 100s or 1,000s
 of characters, and particularly good at aligning to relatively long (e.g. mammalian) genomes.
 Bowtie 2 indexes the genome with an FM Index to keep its memory footprint small: for the human genome,
 its memory footprint is typically around 3.2 GB. Bowtie 2 supports gapped, local, and paired-end alignment modes.  
  
  
### Usage  
To use the module on Bunya, load it with the command  
  **`module load bowtie2/2.4.4-gcc-10.3.0`**.  
  
### Toolchain  
GCC (10.3.0)  
  
### Toolchain Options  
{'pic': True}  
  
  
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
[zlib 1.2.11  (GCCcore 10.3.0)](link)  
[Perl 5.32.1  (GCCcore 10.3.0)](link)  
[Python 3.9.5  (GCCcore 10.3.0)](link)  
  
## Homepage  
The homepage for Bowtie2 2.4.4 .  
[https://bowtie-bio.sourceforge.net/bowtie2/index.shtml](https://bowtie-bio.sourceforge.net/bowtie2/index.shtml)  
