def is_valid_octet(part):
    if not part.isnumeric():
        return False
    if len(part) > 1 and part[0] == "0":
        return False
    part_value = int(part)
    return 0 <= part_value <= 255

class IPValidator:
    def __init__(self):
        pass

    def validate_ipv4_address(self,ip_address:str) -> bool:
        ip_parts = ip_address.split(".")
        if len(ip_parts) != 4:
            return False
        for part in ip_parts:
            if not is_valid_octet(part):
                return False

        last_octet = int(ip_parts[3])
        if last_octet in (0,255):
            return False
        return True