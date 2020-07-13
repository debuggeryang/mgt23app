<?php
namespace BiFang\TutorialAdminBasic\Controller\Adminhtml\ControllerName;
class ActionName extends \Magento\Backend\App\Action
{
    // _isAllowed() inAbstractAction.php control this action accessibility
    const ADMIN_RESOURCE = 'BiFang_TutorialAdmin::basic';

    protected $resultPageFactory;
    public function __construct(
        \Magento\Backend\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory)
    {
        $this->resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        return $this->resultPageFactory->create();
    }

}
