# flex 2.6.4  
(lang)  
  
  
Flex (Fast Lexical Analyzer) is a tool for generating scanners. A scanner,
 sometimes called a tokenizer, is a program which recognizes lexical patterns
 in text.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
{'pic': True}  
  
  
### Usage  
Use the command **`module load flex/.2.6.4-gcccore-10.3.0`** to load the module on Bunya.  
  
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
dependencies = [
    ('Bison', '3.7.6'),
    ('help2man', '1.48.3'),
    # use same binutils version that was used when building GCC toolchain
    ('binutils', '2.36.1', '', SYSTEM),
]  
  
