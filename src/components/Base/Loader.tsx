import { Center, Spinner } from "native-base"
import { LoaderProps } from "~types"

export const Loader: React.FC<LoaderProps> = ({ 
	loading = true
}) => {

	if(!loading) return null
	
	return <Center>
		<Spinner/>
	</Center>
}