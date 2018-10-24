export const isIPAddress = (input) => {
	if(input == null) return false;
	if(!(typeof input === 'string' || input instanceof String)) return false;
	var i;
	var s="";
	var count=0;
	for(i=0;i<input.length;i++) {
	if(input.charAt(i)=='.') {
		count++;
		if(s.length>0) {
			if(s.charAt(0)==0&&s.length>1)
				return false;
			else if(!(parseInt(s)>=0 && parseInt(s)<=255))
				return false;
      s="";
		}
		else
			return false;
	}
	else if((input.charAt(i)>='0'&&input.charAt(i)<='9'))
		s+=input.charAt(i);
		else
			return false;
	}
	if(count!=3)
	return false;
	if(s.length>0) {
		if(s.charAt(0)==0&&s.length>1)
			return false;
		else if(!(parseInt(s)>=0 && parseInt(s)<=255))
			return false;
	}
	else return false;
	return true;
}
