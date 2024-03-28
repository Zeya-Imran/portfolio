import { Button, Form, Input } from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import LayoutSection from "../shared/layout";
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../animations';


const Contact = () => {
    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <LayoutSection>
            <motion.div
                className="bg-[#1e1e28]  text-white md:w-6/12 w-11/12 mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
            >
                <motion.h1 className="text-3xl bg-[#2c2c37] pt-5 px-5" variants={fadeInAnimation}>
                    Get in touch
                </motion.h1>
                <motion.div
                    className="bg-[#2c2c37] px-5 py-10"
                    variants={fadeInAnimation}
                >
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            rules={[{ required: true }]}
                        >
                            <Input
                                className="p-4 custom-colors ant-input"
                                placeholder="Name"
                                size="large"
                                prefix={<UserOutlined className="site-form-item-icon text-white bg-[#20202a]" />}
                                style={{
                                    backgroundColor: '#24242f',
                                    borderRadius: 0,
                                    border: 0
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true }]}
                        >
                            <Input
                                className="p-4 custom-colors ant-input"
                                placeholder="Email"
                                size="large"
                                prefix={<MailOutlined className="site-form-item-icon text-white bg-[#20202a]" />}
                                style={{
                                    backgroundColor: '#24242f',
                                    borderRadius: 0,
                                    border: 0
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea
                                className="p-4 custom-color"
                                placeholder="Your message"
                                size="large"
                                rows={4}
                                style={{
                                    backgroundColor: '#24242f',
                                    borderRadius: 0,
                                    border: 0
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                className="bg-[#ffc107]" size="large"
                                style={{
                                    borderRadius: 0,
                                    border: 0
                                }}>
                                SEND MESSAGE
                            </Button>
                        </Form.Item>
                    </Form>
                </motion.div>
            </motion.div>
        </LayoutSection>
    )
}

export default Contact;



