
def check_leading_zeros(value):
    if len(value) > 1 and value[0] == "0":
        return True
    return False

def check_is_valid_part(part):
    if not part.isnumeric():
        return False
    part_value = int(part)
    if part_value >= 0 and part_value <= 255:
        return True
    return False
class IPValidator:
    def __init__(self):
        pass

    def validate_ipv4_address(self,ip_address:str) -> bool:
        ip_parts = ip_address.split(".")
        if len(ip_parts) != 4:
            return False
        if ip_parts[3] == "0" or ip_parts[3] == "255":
            return False
        for part in ip_parts:
            if not check_is_valid_part(part):
                return False
            if check_leading_zeros(part):
                return False
        return True