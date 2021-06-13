# 'Verify File Checksum' Github Action

This action generates a file containing the checksum of a submitted file.

#### *Modifies Flurb's [verify-file-checksum-action](https://github.com/Flurb/verify-file-checksum-action)*

## Inputs

### `filePath`

**Required** The URL of the file to check.

### `saveFile`

**Required** Where to save the file containing the checksum.

### `algorithm`

**Required** The algorithm that has been used for calculating the checksum. Run `openssl list-message-digest-algorithms` in your terminal to check all available algorithms. Examples: `MD5`, `SHA512`, `DSA-SHA1`.

## Outputs

This run has no outputs.

## Example usage

```yaml
uses:  ToxicAven/generate-checksum-file@v2
with:
  filePath: file.jar
  saveFile: fileSum.txt
  algorithm: 'sha256'
```
