

class IPValidator:
    def __init__(self):
        pass

    def validate_ipv4_address(self,ip_address:str) -> bool:
        ip_parts = ip_address.split(".")
        if len(ip_parts) != 4:
            return False
        if ip_parts[3] == "0" or ip_parts[3] == "255":
            return False
        return True