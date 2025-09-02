class IPValidator:

    def _is_valid_octet(self,part):
        if not part.isnumeric():
            return False
        if len(part) > 1 and part[0] == "0":
            return False
        part_value = int(part)
        return 0 <= part_value <= 255

    def validate_ipv4_address(self,ip_address:str) -> bool:
        ip_parts = ip_address.split(".")
        if len(ip_parts) != 4:
            return False

        if not all(self._is_valid_octet(part) for part in ip_parts):
            return False

        last_octet = int(ip_parts[3])
        return not(last_octet == 0 or last_octet == 255)