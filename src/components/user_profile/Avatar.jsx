import './avatar.scss'
const noAvatar = "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"

const Avatar = ({ name, email, className, src, alt, ...props }) => {
    const handleOnError = (e) => {
        e.target.src = noAvatar
    }
    return (
        <div className='avatar'>
            {src ? (
                <img
                    {...props}
                    className={`defaultClass ${className}`}
                    src={src}
                    alt={alt}
                    onError={handleOnError} />
            ) : (
                <img
                    {...props}
                    className={`defaultClass ${className}`}
                    src={noAvatar}
                    alt={alt}
                />)}
            <div className='content'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Avatar
