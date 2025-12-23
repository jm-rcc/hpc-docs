[List of Software](../software_shortlist.md)  
# Bowtie2 2.4.4  
![Static Badge](https://img.shields.io/badge/class-bio-D7D1CC)  
  
  
 Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads
 to long reference sequences. It is particularly good at aligning reads of about 50 up to 100s or 1,000s
 of characters, and particularly good at aligning to relatively long (e.g. mammalian) genomes.
 Bowtie 2 indexes the genome with an FM Index to keep its memory footprint small: for the human genome,
 its memory footprint is typically around 3.2 GB. Bowtie 2 supports gapped, local, and paired-end alignment modes.  
  
  
## Homepage  
The homepage for Bowtie2 2.4.4   
[https://bowtie-bio.sourceforge.net/bowtie2/index.shtml](https://bowtie-bio.sourceforge.net/bowtie2/index.shtml)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load bowtie2/2.4.4-gcc-10.3.0`**  
  
### Toolchain  
GCC-10.3.0  
  
### Toolchain Options  
pic: True  
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
Bowtie2 depends on the following modules, and they will be loaded automatically with this module.  
  
[zlib 1.2.11  (GCCcore-10.3.0)](zlib-.1.2.11-gcccore-10.3.0.md)  
[Perl 5.32.1  (GCCcore-10.3.0)](perl-5.32.1-gcccore-10.3.0.md)  
[Python 3.9.5  (GCCcore-10.3.0)](python-3.9.5-gcccore-10.3.0.md)  
  
## Loaded by  
The following modules will load Bowtie2 as dependency.  
  
[Trinity 2.9.1  (foss-2021a)](trinity-2.9.1-foss-2021a.md)  
  
